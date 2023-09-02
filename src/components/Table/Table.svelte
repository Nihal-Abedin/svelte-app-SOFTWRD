<script>
	//imports
	import { countryDataStore } from '../../stores';
	import TableRowV2 from './TableBodyV2/TableRowV2.svelte';
	import { afterUpdate } from 'svelte';
	//
	let PAGE_NO = 1;
	let countries = [];
	let currentCountries = [];
	countryDataStore.subscribe((value) => (countries = value));

	let start = 0;
	let end = 10;

	const handleNext = () => {
		PAGE_NO += 1;
	};
	const handlePrevious = () => {
		if (PAGE_NO === 1) {
			return;
		}
		PAGE_NO -= 1;
	};
	afterUpdate(() => {
		const newPage = PAGE_NO;
		start = (newPage - 1) * 10;
		end = newPage * 10;
		currentCountries = countries.slice(start, end);
	});
</script>

<main class=" h-full">
	<table class="bg-white w-full border-collapse cTable">
		<thead class="border-t-2">
			<tr class="text-left">
				<th class="p-3">Flag</th>
				<th class="p-3">Name</th>
				<th class="p-3">Population</th>
				<th class="p-3">CICO</th>
				<th class="p-3 text-center">UN Member Status</th>
				<th class="p-3 text-center">Currencies</th>
				<th class="p-3 text-center">Languages</th>
			</tr>
		</thead>
		<tbody>
			{#each currentCountries as country}
				<TableRowV2 {country} />
			{/each}
		</tbody>
	</table>
	<p>Showing 10 results of {countries.length}</p>
	<button on:click={handlePrevious}>Previous</button>
	<span>{`<${PAGE_NO}>`}</span>
	<button on:click={handleNext}>Next</button>
</main>

<style>
	.cTable th:last-child {
		width: 10rem;
	}
</style>
