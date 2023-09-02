<script>
	import Chart from 'chart.js/auto';
	import { countryDataStore } from '../../stores';
	import { onMount } from 'svelte';

	let countries = [];
	countryDataStore.subscribe((value) => (countries = value));
	const populationDataWithName = countries?.map((con) => ({
		name: con.name.common,
		population: con.population
	}));
	const mostPopulatedCountires = populationDataWithName
		.sort((a, b) => b.population - a.population)
		.slice(0, 10);
	let chartLabels = mostPopulatedCountires.map((p) => p.name);
	let chartData = mostPopulatedCountires.map((popu) => popu.population);
	let ctx;

	const backgroundColors = [
		'rgb(31, 41, 55)',
		'rgb(31, 41, 80)',
		'rgb(55, 65, 81)',
		'rgb(75, 85, 99)',
		'rgb(107, 114, 128)',
		'rgb(156, 163, 175)',
		'rgb(209, 213, 219)',
		'hsl(220, 13%, 91%)',
		'hsl(220, 14%, 34%)'
	];

	onMount(async () => {
		ctx = document.getElementById('myChart');
		new Chart(ctx, {
			type: 'polarArea',
			data: {
				labels: chartLabels,
				datasets: [
					{
						label: 'Population',
						backgroundColor: backgroundColors,
						data: chartData
					}
				]
			}
		});
	});
</script>

<div class="bg-white rounded-lg">
	<div class="p-3 border-b-2">
		<h2>Countries</h2>
	</div>
	<canvas id="myChart" />
</div>
