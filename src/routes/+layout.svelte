<script>
	import '../app.css';
	const routes = [
		{ path: '/', label: 'Home' },
		{ path: 'layout', label: 'Layout' },
		{ path: 'chart', label: 'Chart' },
		{ path: 'map', label: 'Map' }
	];
</script>

<div class="h-screen grid grid-cols-1 grid-rows-[auto,1fr] font-bold">
	<div class="bg-slate-100 p-3 drop-shadow-lg flex gap-4 justify-end">
		{#each routes as route}
			<a href={route.path}>{route.label}</a>
		{/each}
	</div>
	<div class="bg-white h-full overflow-y-auto">
		<slot />
	</div>
</div>
