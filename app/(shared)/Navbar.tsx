import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
	return (
		// navbar links
		<header className="mb-5">
			<nav className="flex justify-between items-center bg-black text-white px-10 py-5">
				{/* <div>Navbar</div> */}
				{/* <div>Banners</div> */}
				<div className="flex justify-between items-center gap-10">
					<Link href="/">Home</Link>
					<Link href="/">About</Link>
				</div>
				<div>
					<p>Sign In</p>
				</div>
			</nav>
			<div className="flex justify-between items-center px-10 py-5">
				<div className="basis-2/3">
					<h1 className="font-bold text-4xl md:text-5xl">FAKE NEWS BLOG</h1>
					<p className="mt-3">
						All articles in this blog have been completely generated by AI.
					</p>
				</div>
				<div className="basis-full relative w-auto h-32 bg-black">
					Image here
				</div>
			</div>
            <hr className="border-1 mx-10" />
		</header>
	);
};

export default Navbar;