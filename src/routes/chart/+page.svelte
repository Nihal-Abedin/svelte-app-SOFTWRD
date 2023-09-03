<script>
	import { countryDataStore } from '../../stores';
	import getContries from '../../Services/getCountry';
	import { onMount } from 'svelte';
	import Table from '../../components/Table/Table.svelte';
	import Chart from '../../components/Chart/Chart.svelte';
	import Spinner from '../../components/Spinner/Spinner.svelte';

	//local state
	let isLoading = true;

	//

	onMount(async () => {
		const { data } = await getContries();
		isLoading = false;

		countryDataStore.set(data); // Update the store with fetched data
	});
</script>

{#if isLoading}
	<div class="h-full flex justify-center bg-stone-200 items-center">
		<Spinner />
	</div>
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
