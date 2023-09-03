<script>
	// props
	export let country;
	//
	const currencySym = country?.currencies ? Object.keys(country?.currencies)[0] : '-';
	const language = country?.languages
		? Object.values(country?.languages).slice(0, 2).join(',')
		: '-';
</script>

<tr class="text-left border-t-2">
	<td class="p-3">{country.flag}</td>
	<td class="p-3 w-[15%]">{country.name.common}</td>
	<td class="p-3">{country.population}</td>
	<td class="p-3">{country.cioc || '-'}</td>
	<td class="p-3">
		<div class="h-full w-full flex justify-center items-center">
			<p
				class={`${
					country.unMember ? 'bg-stone-400' : 'bg-slate-500'
				} w-fit px-2 rounded-md text-white`}
			>
				{country.unMember ? 'Yes' : 'No'}
			</p>
		</div>
	</td>
	<td class="p-3 text-center">{currencySym}</td>
	<td class="p-3 text-center">{language}</td>
</tr>
