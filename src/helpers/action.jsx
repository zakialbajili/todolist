'use server'
import { redirect } from "next/navigation";
const navigate =(url)=>{ redirect(url)
}
export default navigate