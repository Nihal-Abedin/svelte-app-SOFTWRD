<script>
	import { countryDataStore } from '../../stores';
	import TableBody from './TableBody/TableBody.svelte';
	import TableHeader from './TableHeader.svelte';
</script>

{#if $countryDataStore.length === 0}
	<p>Loading</p>
{:else}
	<main class="bg-slate-200 h-full p-3">
		<TableHeader />
		<TableBody />
	</main>
{/if}
