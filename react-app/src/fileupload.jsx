import React from 'react'
import {useState} from 'react'
import Button from './components/button'
import Input from './components/input'
import axios from 'axios';
function FileUpload() {
    const [file,setFile] = useState(null)
    const [imagePath,setImagePath] = useState('')
    const [name,setName]= useState("")
    function filehandler(e){
        setFile(e.target.files[0])
        setImagePath(e.target.value)
    }

    async function fileupload(e){
      e.preventDefault();
        const data= new FormData()
        data.append('name',name)
        data.append('image',file)

          try{
             await axios.post('http://localhost:5000/image/upload',data)
          }
          catch(error){
            console.log(error)
          }

    }
        

  //       fetch('http://localhost:5000/image/upload',{
  //         method: "POST",
  //         body: data
  //     })
  //     .then(response => console.log(response))
  //     .then(json => console.log(json))
  //   }
  return (
    <div className='py-16 mx-auto bg-gradient-to-l from-cyan-400 to-blue-500 h-screen'>
    <div className='max-w-lg mx-auto shadow-2xl px-36 py-7 rounded-3xl overflow-hidden bg-gray-50 mt-36 space-y-3'>
    <form type="submit" onSubmit={fileupload}>
    <label>Name</label>
    <Input type="text" varient="login" onChange={(e)=>setName(e.target.value)}/>
        <label>Image</label>
        <input type="file" value={imagePath} className=" text-sm text-grey-500
            file:mr-5 rounded-full border-0 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "  onChange={filehandler}/>
         <div className='mt-5'> <Button varient="cart" type="submit" onSubmit={fileupload}>Upload</Button></div>
         </form>
    </div>
    </div>
  )
}

export default FileUpload