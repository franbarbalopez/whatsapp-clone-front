import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body
        className='top-green w-screen h-screen bg-[#DFDFDD]'
      >

        <div className='max-w-[1600px] w-[calc(100%-38px)] h-[calc(100%-38px)] m-auto relative top-[19px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
