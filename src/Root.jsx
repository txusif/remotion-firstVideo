import {
	Composition,
	Sequence,
	Audio,
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Pie} from '@remotion/shapes';

import {questionsArray, outputSentencesArray, keywords} from './data.js';
import {audio1, audio2, audio3, audio4, bgImage} from '../Assets';
import {Title} from './Title';
// import MyPieChart from './Pie.jsx';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={120 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

// const Image = ({ img }) => <img src={img} style={{ display: 'block', margin: 'auto' }} />;
// const Image = ({img}) => (
// 	<img
// 		src={img}
// 		style={{
// 			display: 'block',
// 			margin: '110px auto',
// 			width: '100%',
// 			height: '100%',
// 			objectFit: 'contain',
// 		}}
// 		alt="Background"
// 	/>
// );

const Main = () => {
	const containerStyles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	};

	const pieStyles = {
		position: 'absolute',
		top: '60%', // Center vertically
		left: '50%', // Center horizontally
		transform: 'translate(-50%, -50%)', // Move back by half of its size
	};

	const textStyle = {
		fontSize: 100,
		color: 'black',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		textAlign: 'center',
	};

	return (
		<AbsoluteFill style={containerStyles}>
			<div style={{backgroundColor: 'white', flexGrow: 1}}>
				{/* <Sequence from={0} durationInFrames={120 * 30}>
					<Image img={bgImage} />
				</Sequence> */}
				{/* <MyPieChart /> */}

				<Sequence from={0} durationInFrames={35 * 30}>
					<Audio src={audio1} />
					<Title titleText={keywords[0]} titleColor="black" />
					<div style={pieStyles}>
						<Pie
							radius={350}
							progress={0.226}
							fill="green"
							stroke="red"
							strokeWidth={1}
						/>
					</div>
				</Sequence>

				<Sequence from={35 * 30} durationInFrames={8 * 30}>
					<Audio src={audio2} />
					<Title titleText={keywords[1]} titleColor="black" />
					<div style={pieStyles}>
						<Pie
							radius={350}
							progress={0.226 + 0.019}
							fill="blue"
							stroke="yellow"
							strokeWidth={1}
						/>
					</div>
				</Sequence>

				<Sequence from={43 * 30} durationInFrames={8 * 30}>
					<Audio src={audio3} />
					<Title titleText={keywords[2]} titleColor="black" />
					<div style={pieStyles}>
						<Pie
							radius={350}
							progress={0.226 + 0.019 + 0.094}
							fill="orange"
							stroke="purple"
							strokeWidth={1}
						/>
					</div>
				</Sequence>

				<Sequence from={51 * 30} durationInFrames={68 * 30}>
					<Audio src={audio4} />
					<Title titleText={keywords[3]} titleColor="black" />
					<div style={pieStyles}>
						<Pie
							radius={350}
							progress={1}
							fill="pink"
							stroke="black"
							strokeWidth={1}
						/>
					</div>
				</Sequence>
			</div>
		</AbsoluteFill>
	);
};

// // 0.66 0.019 0.226 0.094 0.001
