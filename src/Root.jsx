import {Composition, Sequence, Audio, AbsoluteFill} from 'remotion';

import {questionsArray, outputSentencesArray, keywords} from './data.js';
import {audio1, audio2, audio3, audio4, bgImage} from '../Assets';
import {Title} from './Title';

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

			{/* <Composition
				id="OnlyImage"
				component={OnlyImage}
				durationInFrames={120 * 30}
				fps={30}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};

// const Image = ({img}) => <img src={img} />;
// const Image = ({ img }) => <img src={img} style={{ display: 'block', margin: 'auto' }} />;
const Image = ({img}) => (
	<img
		src={img}
		style={{
			display: 'block',
			margin: '110px auto',
			width: '100%',
			height: '100%',
			objectFit: 'contain',
		}}
		alt="Background"
	/>
);

// const OnlyImage = () => {
// 	return (
// 		<div style={{backgroundColor: 'white', flexGrow: 1}}>
// 			<AbsoluteFill>
// 				<Sequence from={0} durationInFrames={120 * 30}>
// 					<Image img={bgImage} />
// 				</Sequence>
// 			</AbsoluteFill>
// 		</div>
// 	);
// };

const Main = () => {
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
		<div style={{backgroundColor: 'white', flexGrow: 1}}>
			<AbsoluteFill>
				<Sequence from={0} durationInFrames={120 * 30}>
					<Image img={bgImage} />
				</Sequence>

				<Sequence from={0} durationInFrames={35 * 30}>
					<Audio src={audio1} />
					<Title titleText={keywords[0]} titleColor="black" />
				</Sequence>

				<Sequence from={35 * 30} durationInFrames={8 * 30}>
					<Audio src={audio2} />
					<Title titleText={keywords[1]} titleColor="black" />
				</Sequence>

				<Sequence from={43 * 30} durationInFrames={8 * 30}>
					<Audio src={audio3} />
					<Title titleText={keywords[2]} titleColor="black" />
				</Sequence>

				<Sequence from={51 * 30} durationInFrames={68 * 30}>
					<Audio src={audio4} />
					<Title titleText={keywords[3]} titleColor="black" />
				</Sequence>
			</AbsoluteFill>
		</div>
	);
};
