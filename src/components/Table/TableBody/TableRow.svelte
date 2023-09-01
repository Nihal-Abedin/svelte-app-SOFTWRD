<script>
	// props
	export let country;
	//
	const currencySym = country?.currencies ? Object.keys(country?.currencies)[0] : '-';
	const language = country?.languages
		? Object.values(country?.languages).slice(0, 2).join(',')
		: '-';
</script>

<main class="border-t-2">
	<div
		class="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr,1.5fr] gap-4 bg-white p-3 capitalize items-center"
	>
		<div>
			{country.flag}
		</div>
		<!-- <img class="w-[50px] h-[2rem]" src={country.png} alt={''} /> -->
		<div>{country.name.common}</div>
		<div>{country.population}</div>
		<div>{country.cioc || '-'}</div>
		<div>
			<p
				class={`${
					country.unMember ? 'bg-slate-500' : 'bg-stone-400'
				} w-fit px-2 rounded-md text-white`}
			>
				{country.unMember ? 'Yes' : 'No'}
			</p>
		</div>
		<div>{currencySym}</div>
		<div class="break-words">{language}</div>
	</div>
</main>
