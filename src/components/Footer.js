const Footer = () =>{

    return (
      <footer className="mx-auto mt-32 w-full max-w-container ">
        <div className="border-t-[0.5px] border-slate-700 py-10 flex flex-col justify-center items-center">

            <h1 className="font-serif text-xl font-extrabold tracking-wider text-[#abc]">REMOVIECT</h1>
            <p className="mt-5 text-center text-sm leading-6 text-slate-500">
                © 2022 Removiect Labs Inc. All rights reserved.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                <a href="/privacy-policy">Privacy policy</a>
                <div className="h-4 w-px bg-slate-500/20"></div>
                <a href="/changelog">Changelog</a>
            </div>

        </div>
      </footer>
    );



}

export default Footer;