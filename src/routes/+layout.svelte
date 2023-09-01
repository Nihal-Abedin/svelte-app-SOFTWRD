<script>
	import '../app.css';
</script>

<div class="h-screen grid grid-cols-1 grid-rows-[auto,1fr] font-bold">
	<div class="bg-blue-400 p-3 text-2xl">
		<a href="/">Home</a>
		<span>/</span>
		<a href="/layout">Layout</a>
		<span>/</span>
		<a href="/chart">Chart</a>
		<span>/</span>
		<a href="/map">Map</a>
		<span>/</span>
	</div>
	<div class="bg-white h-full p-3">
		<slot />
	</div>
</div>
