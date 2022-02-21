import './index.less';

export default function IndexPage() {
  return (
    <header className='px-10 md:px-20 py-5 flex flex-col md:flex-row justify-between items-center bg-black'>
      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12 color-red-100 " src={require('./Logo.svg')} alt="ChitChat Logo"/>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div> 

      </div> */}
      <img src={require('./Logo.svg')} alt="Logo" className='h-5 w-auto lg:h-8' />
      
      <div className='space-x-4 text-white text-lg nav-links flex flex-col md:flex-row'>
        <a href="#">Home</a>
        <a href="#">Game</a>
        <a href="#">Video</a>
        <a href="#">Music</a>
      </div>
    </header>
  );
}
