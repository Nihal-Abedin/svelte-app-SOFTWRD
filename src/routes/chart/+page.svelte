<script>
	import { get } from 'svelte/store';
	import { countryDataStore } from '../../stores';
	import getContries from '../../lib/Services/getCountry';
	import { onMount } from 'svelte';
	import Table from '../../components/Table/Table.svelte';
	onMount(async () => {
		const { data } = await getContries();

		countryDataStore.set(data); // Update the store with fetched data
	});
</script>

<main class="h-full grid grid-cols-[2fr,1fr]">
	<div class="overflow-y-auto max-h-full">
		<Table />
	</div>
	<div>DIAGRAM</div>
</main>
