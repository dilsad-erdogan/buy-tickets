

const Login = ({ handleSignIn }) => {
  return (
    <div className="p-6">
        <h1 className="text-3xl text-purple-800 dark:text-purple-200 font-bold text-center mb-4">Login</h1>

        <form className="flex flex-col gap-3">
            <div>
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email" id="email" className="input" />
            </div>
            <div>
                <label htmlFor="text" className="input-label">Phone</label>
                <input type="text" id="phone" className="input" />
            </div>
        </form>

        <button className="text-purple-200 dark:text-purple-800 bg-purple-800 dark:bg-purple-200 cursor-pointer hover:scale-105 duration-300 mt-5 py-2 px-8 rounded-full relative z-10 w-full">Login</button>

        <p className="text-center text-purple-800 dark:text-purple-200 text-sm my-3 cursor-pointer" onClick={handleSignIn}>Already have not an account? Sign In</p>
    </div>
  )
}

export default Login