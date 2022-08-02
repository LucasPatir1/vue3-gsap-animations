import { useTitle } from '@vueuse/core'

export const animationPageList = [
	{
		index: 0,
		title: 'Animation Zero',
		desc: 'The Loading screen for my portfolio website',
		link: '/animations/pageZero',
	},
	{
		index: 1,
		title: 'Animation One',
		desc: 'This is the same as the website intro, Just with a reverse button added',
		link: '/animations/pageOne',
	},
	{
		index: 2,
		title: 'Animation Two',
		desc: 'A simple welcome screen with a loader',
		link: '/animations/pageTwo',
	},
	{
		index: 3,
		title: 'Animation Three',
		desc: 'A credit card Animation',
		link: '/animations/pageThree',
	},
	{
		index: 4,
		title: 'Animation Four',
		desc: 'A Juice Website landing page with animations',
		link: '/animations/pageFour',
	},
	{
		index: 5,
		title: 'Animation Five',
		desc: 'An Animated Travel App screen',
		link: '/animations/pageFive',
	},
	{
		index: 6,
		title: 'Animation Six',
		desc: 'An add to cart button animation',
		link: '/animations/pageSix',
	},
	{
		index: 7,
		title: 'Animation Seven',
		desc: 'A Simple Image hover effect',
		link: '/animations/pageSeven',
	},
	{
		index: 8,
		title: 'Animation Eight',
		desc: 'A GSAP fullscreen Slider',
		link: '/animations/pageEight',
	},
	{
		index: 9,
		title: 'Animation Nine',
		desc: 'An accordion-Kenburns-Mouse-Event animation',
		link: '/animations/pageNine',
	},
	{
		index: 10,
		title: 'Animation Ten',
		desc: 'An animated mobile screen interaction ',
		link: '/animations/pageTen',
	},
	{
		index: 11,
		title: 'Animation Eleven',
		desc: 'A ScrollMagic and GSAP animation',
		link: '/animations/pageEleven',
	},
	{
		index: 12,
		title: 'Animation Twelve',
		desc: 'A circular Text animation',
		link: '/animations/pageTwelve',
	},
	{
		index: 13,
		title: 'Animation Thirteen',
		desc: 'A translating Y-axis text animation',
		link: '/animations/pageThirteen',
	},
	{
		index: 14,
		title: 'Animation Fourteen',
		desc: 'implemntation of Cuberto mouse follower',
		link: '/animations/pageFourteen',
	},
	{
		index: 15,
		title: 'Animation Fiftheen',
		desc: 'Creepy Eyes animation',
		link: '/animations/pageFiftheen',
	},
	{
		index: 16,
		title: 'Animation Sixteen',
		desc: 'Glowing background animation',
		link: '/animations/pageSixteen',
	},
]


export const setTitle = (data:any) => {
	const title = useTitle()
	title.value = data
}