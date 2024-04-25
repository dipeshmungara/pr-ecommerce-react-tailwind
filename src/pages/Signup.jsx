// import React from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";


export const Signup = () => {
  return (
    <div>
      <Card className="max-w-sm m-auto">
      <form className="flex flex-col gap-4">
      <div>
          <div className="mb-2 block">
            <Label htmlFor="Username" value="User name" />
          </div>
          <TextInput id="Username" type="text"  required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@example.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput id="phone" type="text" placeholder="+91 123 456 7890" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button  gradientDuoTone="tealToLime" type="submit">Submit</Button>
      </form>
    </Card>
    </div>
  )
}
