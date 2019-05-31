<projectList>
	<div class="row">
		<ul class="col l3 collection">
			<li class="collection-item" each="{ group, index in group1 }">
				<input type="radio" name="group{ index }" value="{ group1[index].projectUrl }">
				<label for="group{ index }">{ group1[index].projectName }</label>
			</li>
		</ul>
	</div>



<style scoped type="stylus">
	:scope
		display block
		flex 1
	.collection
		width 100%
	.collection.col
		padding 0
</style>


<script>

	this.groupNames = ['1課', '2課', '3課', '4課'];
	this.group1 = [
		{
			projectName: 'Nuno',
			projectUrl: 'https://test.jp/'
		},
		{
			projectName: 'Jhon',
			projectUrl: 'https://test2.jp/'
		},
	];

</script>
</projectList>