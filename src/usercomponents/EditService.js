import './service.css'
import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img from '../bkgimg.jpg' 

const EditService = ({ url }) => {
    const { accessKey, setstatus} = useContext(DataContext)
    const [nameInput, setnameInput] = useState('')
    const [descInput, setdescInput] = useState('')
    const [priceInput, setpriceInput] = useState('')
    const [imgOne, setimgOne] = useState('')
    const [imgTwo, setimgTwo] = useState('')
    const [imgThree, setimgThree] = useState('')
    const [fetchError, setfetchError] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(()=>{
        window.scrollTo(0,0)
     }, [])

    const unauthorized = () =>{
        alert('You Are Not Authorized To Perform This Action')
        navigate('/')
      }

    const handleEdit = async (e) =>{ 
        setisLoading(true)
        e.preventDefault()
        try{
            const response = await fetch(`${url}/services/`, {
            method: 'PUT',
            headers:{
                'Authorization': `Bearer ${accessKey}`,
                'Content-type': 'application/json; charset=UTF-8'                
            },
            body:JSON.stringify({
                id:id,
                name:nameInput,
                desc:descInput,
                price:priceInput,
                imgone:imgOne,
                imgtwo:imgTwo,
                imgthree:imgThree
            })
            })
            if (response.status === 401){
              return unauthorized()
              }
            if (!response.ok) throw Error('Did Not Recieve Expected Data')
            const serviceItems = await response.json()
            setstatus(serviceItems)
            setfetchError(null)
            navigate(`/service/${id}`)
        } catch (err){
            setfetchError(err.message)
            setstatus('')
            if (err.response){
                setfetchError(`Error: ${err.response.data}`)
            } else {
            setfetchError(`Error: ${err.message}`)
            }
        } finally{
        setisLoading(false)

        }
        }

    return (
    <div style={{
        backgroundImage:`url(${img})`,
        backgroundSize:'cover'
        }}>
        <div>
            <form>
          {isLoading && <p className='Pad3'>Changing Service Details...</p>}
          {!isLoading &&fetchError && <p className='error4'>{fetchError}</p>}
                <h1 className='Pad3'>Edit Service: {id}</h1>
                <div className='inputBoxname'>
                <h2 className='name'>Service Name</h2>
                    <input
                        type='text'
                        placeholder='Service Name'
                        required
                        value={nameInput}
                        onChange={(e)=>{setnameInput(e.target.value)}}/>
                </div>
                <div className='inputBoxdesc'>
                <h2 className='name'>Description</h2>
                    <textarea
                        type='textarea'
                        placeholder='Description'
                        required
                        value={descInput}
                        onChange={(e)=>{setdescInput(e.target.value)}}/>
                </div>
                <div className='inputBoxprice'>
                <h2 className='name'>Price</h2>
                    <input
                        type='text'
                        placeholder='Price'
                        required
                        value={priceInput}
                        onChange={(e)=>{setpriceInput(e.target.value)}}/>
                </div>
                <div className='inputBoximg1'>
                <h2 className='name'>Image url</h2>
                    <input
                    type='text'
                    placeholder='Image url'
                    value={imgOne}
                    onChange={(e)=>{setimgOne(e.target.value)}}/>
                </div>
                <div className='inputBoximg2'>
                <h2 className='name'>Image url</h2>
                    <input
                    type='text'
                    placeholder='Image url'
                    value={imgTwo}
                    onChange={(e)=>{setimgTwo(e.target.value)}}/>
                </div>
                <div className='inputBoximg3'>
                <h2 className='name'>Image url</h2>
                    <input
                    type='text'
                    placeholder='Image url'
                    value={imgThree}
                    onChange={(e)=>{setimgThree(e.target.value)}}/>
                </div>
                <button type='submit' className='btn1' onClick={(e)=>{handleEdit(e)}}>Save Changes</button> 
                <button type='button' className='btn2' onClick={()=>{navigate(`/service/${id}`)}}>Discard</button> 
            </form>
        </div>
    </div>
    )
}

export default EditService
