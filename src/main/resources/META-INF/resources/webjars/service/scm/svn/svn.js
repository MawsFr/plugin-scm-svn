define(function () {
	var current = {

		configureSubscriptionParameters: function (configuration, $container) {
			configuration.type = 'svn';
			return current.$super('configureSubscriptionParameters')(configuration, $container);
		},

		/**
		 * Render Subversion repository.
		 */
		renderKey: function (subscription) {
			return current.$super('renderKey')(subscription, 'service:scm:svn:repository');
		},

		/**
		 * Render Subversion home page.
		 */
		renderFeatures: function (subscription) {
			return current.$super('renderFeaturesScm')(subscription, 'svn');
		},

		/**
		 * Render SVN details : id, and amount of revisions.
		 */
		renderDetailsKey: function (subscription) {
			return current.$super('generateCarousel')(subscription, [current.renderKey(subscription), '#Revisions : ' + subscription.data.info]);
		}
	};
	return current;
});
