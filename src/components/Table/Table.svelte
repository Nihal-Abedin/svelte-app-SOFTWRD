<script>
	// import TableBody from './TableBody/TableBody.svelte';
	// import TableHeader from './TableHeader.svelte';
	import { countryDataStore } from '../../stores';
	import TableRowV2 from './TableBodyV2/TableRowV2.svelte';

	//imports

	let countries;
	countryDataStore.subscribe((value) => (countries = value));

	const tableHeader = [
		'Flag',
		'Name',
		'Population',
		'CICO',
		'UN Member Status',
		'Currencies',
		'Languages'
	];
</script>

<main class=" h-full">
	<!-- <TableHeader />
	<TableBody /> -->
	<table class="bg-white w-full border-collapse cTable">
		<thead class="border-t-2">
			<tr class="text-left">
				<!-- {#each tableHeader as th}
					<th class="p-3">{th}</th>
				{/each} -->
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
			{#each countries as country}
				<TableRowV2 {country} />
			{/each}
		</tbody>
	</table>
</main>

<style>
	.cTable th:last-child {
		width: 10rem;
	}
</style>
