<script>
	import { get } from 'svelte/store';
	import { countryDataStore } from '../../stores';
	import getContries from '../../lib/Services/getCountry';
	import { onMount } from 'svelte';
	import Table from '../../components/Table/Table.svelte';
	import Chart from '../../components/Chart/Chart.svelte';
	onMount(async () => {
		const { data } = await getContries();

		countryDataStore.set(data); // Update the store with fetched data
	});
</script>

{#if $countryDataStore.length === 0}
	<p>Loading</p>
{:else}
	<main class="h-full grid grid-cols-[4fr,1fr] gap-4 bg-stone-200 p-16">
		<div class="overflow-y-auto max-h-full rounded-lg">
			<Table />
		</div>
		<div>
			<Chart />
		</div>
	</main>
{/if}
