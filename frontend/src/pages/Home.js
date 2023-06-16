import React,{useState,useEffect}from 'react'

const Home = () => {
    const [userName,setUserName]=useState('')
    const [show,setShow]=useState(false)
    const callHomePage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                withCredentials: true
            })

            const data = await res.json()
            setUserName(data.name)
            setShow(true);
        }catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        callHomePage()
    }, [])
    return (
        <>
            <div className=' home-container w-50 pt-4' style={{ height: "calc(100vh - 60px)", background: "rgba(59, 113, 202,0.25)" }}>

            </div>
            <div className="text-center position-absolute w-100 " style={{left:'0', top: '40%' }}>
                <p className="text-primary fw-bold fs-4">Welcome</p>
                <h1 className="text-center text-black">{userName} </h1>
                <h3 className="text-center text-black">{show?"Happy, to see you back":"We Are Mern Stack Developer"}</h3>
            </div>


        </>
    )
}

export default Home
