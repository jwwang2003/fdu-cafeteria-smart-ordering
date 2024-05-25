'use client'

import SignIn from "@/components/Authentication";
import Copyright from "@/components/Copyright";

export default function Cart() {
  return  <div>
    <div className="pt-4">
      <SignIn />
    </div>
    
    <p>Settings</p>

    <Copyright />
</div>
}