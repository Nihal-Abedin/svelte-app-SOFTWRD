<script>
	import { countryDataStore } from '../../../stores';
	import TableRow from './TableRow.svelte';
	let countries;
	countryDataStore.subscribe((value) => (countries = value));
</script>

{#each countries as country}
	<TableRow {country} />
{/each}
