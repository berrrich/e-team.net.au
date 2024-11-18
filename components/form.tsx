'use client';

import { Button } from "@/app/ui/button"
import { FormEvent, useState } from "react"

export const ContactForm = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        try {
            const res = await fetch('api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,email,message
                }),
                headers: {
                    'content-type': 'application/json',
                }
            })

        } catch(err:any) {
            console.error('Error: ', err)
        }
    }

return (
    <form onSubmit={onSubmit}>
        <input value={name} onChange={ (e) => SetName(e.target.value)} type="text" placeholder="Name"/>
        <input value={email} onChange={ (e) => SetEmail(e.target.value)} type="email" placeholder="Email"/>
        <textarea value={message} onChange={ (e) => SetMessage(e.target.value)}></textarea>
        <Button type="submit">Submit</Button>
    </form>
)
}