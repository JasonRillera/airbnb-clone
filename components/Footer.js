function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 px-32 py-14 border-t text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p className="cursor-pointer">How Airbnb Works</p>
            <p className="cursor-pointer">Newsroom</p>
            <p className="cursor-pointer">Investors</p>
            <p className="cursor-pointer">Airbnb Plus</p>
            <p className="cursor-pointer">Airbnb Luxe</p>
            </div>
    
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p className="cursor-pointer">Accessibility</p>
            <p className="cursor-pointer">This Is Not A Real Site</p>
            <p className="cursor-pointer">But It's Awesome</p>
            <p className="cursor-pointer">Referrals Accepted</p>
            <p className="cursor-pointer">Jason Rillera</p>
            </div>
    
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p className="cursor-pointer">Jason Rillera</p>
            <p className="cursor-pointer">Presents</p>
            <p className="cursor-pointer">A Cool Airbnb Site</p>
            <p className="cursor-pointer">Made with</p>
            <p className="cursor-pointer">Tailwind CSS</p>
            </div>
    
            <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p className="cursor-pointer">Help Center</p>
            <p className="cursor-pointer">Trust & Safety</p>
            <p className="cursor-pointer">Say Hello</p>
            <p className="cursor-pointer">World</p>
            <p className="cursor-pointer">For The Win</p>
            </div>
        </div>
        );
    }

export default Footer;