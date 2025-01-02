import React, { FormEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { useToast } from '@/hooks/use-toast'
import SuccessMsg from './SuccessMsg'


const Contactform = () => {
 const {toast}=useToast()
    const[status,setStatus]=useState('')
    const[success,setSuccess]=useState(false)
    const[loading,setLoading]=useState(false)
    const[formData,setFormData]=useState({
        Name:'',
        Email:'',
        Phone:'',
        Address:'',
        Message:'',
        Service:'',
    })

    const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {name,value}=e.target
        setFormData((prevData)=>({

            ...prevData,
            [name]:value,
        }))

    };
    const handelSelectChange=(value:string)=>{
        setFormData((prevData)=>({
            ...prevData,
            Service:value,
        }))
    }
    const handelSubmit=async(e:FormEvent<HTMLFormElement> )=>{
        e.preventDefault()
        try {
            setLoading(true);
            if(!formData.Name.trim() || !formData.Email.trim()){
                toast({
                    title:" Error something went wrong",
                    description:"Please enter a Name or Email address",
                    variant:"destructive"
                })
                return;
    
            }
           const form = new FormData()
           const currentDateTime = new Date().toLocaleString();
           form.append('Name',formData.Name)
           form.append('Email',formData.Email)
           form.append('Phone',formData.Phone)
           form.append('Address',formData.Address)
           form.append('Message',formData.Message)
           form.append('Service',formData.Service)
           form.append('DateTime', currentDateTime);


           const response = await fetch('https://getform.io/f/aolldepb',{
                method:'POST',
                body:form,
           })
            if(response.ok){
               setSuccess(true)
                setStatus('Message submitted successfully')
                setFormData({
                    Name:'',
                    Email:'',
                    Phone:'',
                    Address:'',
                    Message:'',
                    Service:'',
                })
            }
            else{
                setStatus('Error! something went wrong')
            }
    
           
    
        } catch (error) {

            console.error(" Data submitting Error",error)
            setStatus('Error! something went wrong')
        }finally{
            setLoading(false)
        }
    }


  return (
    <div className='space-y-4'>
        <h3 className='text-2xl md:text-4xl text-lightsky'>Let&apos;s work together</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non cumque, cupiditate magni, ex fugit illum </p>
    <>
    {success ? <SuccessMsg status={status} /> :
     <form onSubmit={handelSubmit} className='flex flex-col  gap-4 '>
     <div className=' flex flex-col md:flex-row gap-4 items-center'>
         <Input value={formData.Name} onChange={handleChange} type='text' required id='Name' name='Name' disabled={loading} className="disabled:bg-white/10"placeholder='Your name'/>
         <Input  value={formData.Email} onChange={handleChange} type='email' className="disabled:bg-white/10"  required id='Email' name='Email' placeholder='Email address'/>
     </div>
     <div className=' flex flex-col md:flex-row gap-4 items-center'>
         <Input value={formData.Phone} onChange={handleChange} type='text' className="disabled:bg-white/10"  id='Phone' name='Phone' disabled={loading}  placeholder='Phone number'/>
         <Input  value={formData.Address} onChange={handleChange} type='text' className="disabled:bg-white/10"  id='Address' name='Address' disabled={loading}  placeholder='Address'/>
     </div>

<Textarea  value={formData.Message} onChange={handleChange} disabled={loading}className="disabled:bg-white/10"   name='Message'placeholder='Text here' rows={5}/>

<Select onValueChange={handelSelectChange} disabled={loading} className="disabled:bg-white/10" >
 <SelectTrigger>
     <SelectValue placeholder=" Select a service"/>
 </SelectTrigger>
 <SelectContent className='bg-bodyColor text-white border-white/20'>
     <SelectGroup>
         <SelectLabel>
             Select a service
         </SelectLabel>
         <SelectItem value='Web Development'>Web Development</SelectItem>
         <SelectItem value='SEO Management'>SEO Management</SelectItem>
         <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
         <SelectItem value='Logo Design'>Logo Design</SelectItem>
     </SelectGroup>
 </SelectContent>
</Select>
<Button disabled={loading} type='submit' className='bg-lightsky/5 w-full  border-lightsky/20 hover:bg-lightsky/10 text-white/80 hover:border-lightsky hover:text-hoverColor hoverEffect'>
 {loading ?"Submitting message...":"send Message"}
</Button>
  </form>}
    </>
    </div>

  )
}

export default Contactform