import ContentArea from './ContentArea'
import Sidebar from './Sidebar'

const dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ContentArea />
    </div>
  )
}

export default dashboard
