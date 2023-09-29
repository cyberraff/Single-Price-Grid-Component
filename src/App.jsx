import './App.css';

function App() {
	return (
		<>
			<div className=' bg-[#98a6bd] h-full pt-20 text-start pb-4 font-karla'>
				<div className='w-[85%] mx-auto rounded-xl overflow-hidden'>
					<div className='bg-[#e5eff5] px-10 py-14 h-[30rem] sm:h-[28rem] md:h-[25rem]  md:pl-12'>
						<p className='text-4xl font-bold text-[#2ab2af] pb-10'>
							Join our community
						</p>
						<p className='font-bold text-3xl text-[#c0df34] py-3'>
							30-day, hassle-free money back guarantee
						</p>
						<p className='py-3 text-2xl text-[#98a6bd] font-bold leading-loose'>
							Gain access to our full library of tutorials along
							with expert code reviews. Perfect for any developers
							who are serious about honing their skills.
						</p>
					</div>
					<div className=' lg:flex w-full'>
						<div className='bg-[#2ab2af] text-white px-10 py-12 h-[26rem] lg:w-1/2 lg:pl-12'>
							<p className='text-4xl font-bold pb-4'>
								Monthly Subscription
							</p>
							<p className='font-bold text-6xl flex items-center pt-6'>
								$29{' '}
								<span className='text-3xl text-center pl-4 font-normal'>
									{' '}
									per month
								</span>
							</p>
							<p className='text-3xl pt-4 pb-10'>
								Full access for less than $1 a day
							</p>
							<button className=' bg-[#c0df34] p-6 rounded-lg w-full text-3xl font-bold'>
								Sign Up
							</button>
						</div>
						<div className='bg-[#2ab2b0b9] text-white px-10 py-10 h-[26rem] lg:w-1/2 lg:pl-12'>
							<p className='text-4xl font-bold pb-6'>Why us</p>
							<div className=' space-y-2 md:space-y-1.5 text-2xl pt-2'>
								<p>Tutorials by industry experts</p>
								<p> Peer &amp; expert code review</p>
								<p>Coding exercises</p>
								<p>Access to our GitHub repos</p>
								<p>Community forum</p>
								<p>Flashcard decks</p>
								<p>New videos every week</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
