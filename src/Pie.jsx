// import {Pie} from '@remotion/shapes';
// import {AbsoluteFill, Sequence} from 'remotion';

// const MyPieChart = () => {
// 	const containerStyles = {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: 'white',
// 	};

// 	const pieStyles = {
// 		position: 'absolute',
// 		top: '30%',
// 		left: '50%',
// 		transform: 'translate(-50%, -50%)',
// 	};

// 	return (
// 		<AbsoluteFill style={containerStyles}>
// 			<div style={pieStyles}>
// 				<Sequence from={0} durationInFrames={33 * 30}>
// 					<Pie
// 						radius={350}
// 						progress={0.226}
// 						fill="green"
// 						stroke="red"
// 						strokeWidth={1}
// 					/>
// 				</Sequence>
// 				<Sequence from={33 * 30} durationInFrames={8 * 30}>
// 					<Pie
// 						radius={350}
// 						progress={0.226 + 0.019}
// 						fill="blue"
// 						stroke="yellow"
// 						strokeWidth={1}
// 					/>
// 				</Sequence>
// 				<Sequence from={41 * 30} durationInFrames={8 * 30}>
// 					<Pie
// 						radius={350}
// 						progress={0.226 + 0.019 + 0.094}
// 						fill="orange"
// 						stroke="purple"
// 						strokeWidth={1}
// 					/>
// 				</Sequence>
// 				<Sequence from={49 * 30} durationInFrames={67 * 30}>
// 					<Pie
// 						radius={350}
// 						progress={1}
// 						fill="pink"
// 						stroke="black"
// 						strokeWidth={1}
// 					/>
// 				</Sequence>
// 			</div>
// 		</AbsoluteFill>
// 	);
// };

// export default MyPieChart;
