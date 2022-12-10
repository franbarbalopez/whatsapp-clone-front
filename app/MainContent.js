import ChatView from './ChatView'
import DefaultView from './DefaultView'

export default function MainContent ({ chat }) {
  return (
    <div className={`w-full h-full bg-[#F0F2F5] ${chat ? '' : 'border-b-[6px] border-b-[#25D366]'}`}>
      {chat ? <ChatView /> : <DefaultView />}
    </div>
  )
}
