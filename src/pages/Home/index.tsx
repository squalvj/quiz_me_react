import { TextField, Button } from '@material-ui/core';
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center h-screen">
        <div className="w-3/6 mx-auto bg-white shadow-xl rounded flex items-center px-8 py-6 flex-col space-y-6">
          <h1 className="text-xl">LOGIN FORM</h1>
          <div className="w-full">
            <TextField fullWidth label="Username"/>
          </div>
          <div className="w-full">
            <TextField fullWidth type="password" label="Password"/>
          </div>
          <div className="w-full">
           <Button fullWidth variant="contained" color="primary" size="large"> SUBMIT </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
