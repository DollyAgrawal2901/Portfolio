export default function Navbar() {
    const button = 'text-white  hover:bg-gray-900 font-medium rounded-lg  px-3 py-2.5 me-2 dark:hover:bg-gray-700 dark:border-gray-700'
  return (
    <>
    <nav className="flex py-4 bg-cyan-900 space-x-72">
        <h3 className="float-left px-28 font-bold text-3xl" >Dolly Agrawal</h3>
        <ul className="flex float-right">
            <li className={button}><button>Home</button></li>
            <li className={button}><button>About</button></li>
            <li className={button}><button>Skill</button></li>
            <li className={button}><button>Education</button></li>
            <li className={button}><button>Service</button></li>
            <li className={button}><button>Blog</button></li>
            <li className={button}><button>Contact</button></li>
        </ul>
    </nav>
    <div className="relative w-full">
  <img src="/50-Beautiful-and-Minimalist-Presentation-Backgrounds-013.jpg" alt="simple image" className="w-screen h-[36rem] object-cover" />
  <div className="absolute  inset-0 flex justify-center items-center">
    <h3 className="text-6xl text-white">Dolly Agrawal</h3>
  </div>
</div>

    </>
  )
}
