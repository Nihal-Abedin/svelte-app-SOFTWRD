<div class="container">
	<div class="cover bg-yellow-100" />
</div>

<style>
	.container {
		background: #293462;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 300px;
		height: 300px;
	}
	.cover {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		position: relative;
		transform: rotate(45deg);
	}
	.cover::before,
	.cover::after {
		content: '';
		background: #fe5f55;
		position: absolute;
	}
	.cover::before {
		width: 40px;
		height: 40px;
		bottom: -5%;
		right: 45%;
	}
	.cover::after {
		width: 50%;
		height: 100%;
		bottom: -10%;
		right: 42px;
		/* top: 70%; */
		left: 50%;
	}
</style>
