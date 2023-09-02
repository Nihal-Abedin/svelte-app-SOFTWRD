<script>
	import { countryDataStore } from '../../stores';
	import Mountain from './../../lib/Mountain/Mountain.svelte';
	let data;
	countryDataStore.subscribe((value) => (data = value));
	console.log(data);
</script>

<div class="grid sm:grid-cols-12 sm:grid-rows-6 grid-cols-6 grid-rows-4 text-center h-full">
	<div class="bg-blue-400 sm:row-span-3 sm:col-span-2 hidden sm:block">1</div>
	<div class="bg-fuchsia-400 sm:row-[6/-1] sm:col-span-6 hidden sm:block">3</div>
	<div class="bg-rose-100 sm:row-span-5 sm:col-span-4 col-span-6 row-span-2">4</div>
	<div class="bg-sky-400 row-span-2 col-span-6 hidden sm:block">5</div>
	<div
		class="bg-yellow-100 sm:row-span-4 sm:col-span-4 col-span-6 row-span-2 flex justify-center items-center"
	>
		<Mountain />
	</div>
	<div class="bg-emerald-400 row-span-4 col-span-2 hidden sm:block">7</div>
	<div class="bg-teal-400 sm:row-[4/6] sm:col-span-2 hidden sm:block">2</div>
</div>
