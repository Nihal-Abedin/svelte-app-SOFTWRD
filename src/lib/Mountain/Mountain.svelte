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
		position: relative;
		overflow: hidden;
		transform: rotate(45deg);
	}
	.cover::before,
	.cover::after {
		content: '';
		position: absolute;
		background: #fe5f55;
	}
	.cover::before {
		width: 30px;
		height: 30px;
		bottom: 0;
		right: 50%;
	}
	.cover::after {
		width: 50%;
		height: 100%;
		bottom: -10%;
		left: 50%;
		right: 42px;
	}
</style>
