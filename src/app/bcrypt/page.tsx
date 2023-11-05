import bcrypt from "bcrypt"

export default async function bcryptPage() {

    const isCorrect = await bcrypt.compare('hi', '$2a$12$ITXhQ3wu16uFTqP3trjMbe0/mk6tCpKzNIMP.JkuN/j0R18kb2RWi')
    console.log("sb" + isCorrect)

    return(
        <> 
            <div>bcrypt page</div>
        </>
    )
}