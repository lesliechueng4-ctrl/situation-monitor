<script lang="ts">
	import { isRefreshing, lastRefresh } from '$lib/stores';
	import { t, language, setLanguage, isZh } from '$lib/i18n';

	interface Props {
		onSettingsClick?: () => void;
	}

	let { onSettingsClick }: Props = $props();

	const lastRefreshText = $derived(
		$isRefreshing
			? `Last updated: ${new Date($lastRefresh).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
			: 'Never refreshed'
	);

	// 动态 class
	const zhBtnClass = $derived($isZh ? 'active' : '');
	const enBtnClass = $derived(!$isZh ? 'active' : '');
</script>

<header class="header">
	<div class="header-left">
		<h1 class="logo">SITUATION MONITOR</h1>
	</div>

	<div class="header-center">
		<div class="refresh-status">
			{#if $isRefreshing}
				<span class="status-text loading">{t('common.loading')}</span>
			{:else}
				<span class="status-text">{lastRefreshText}</span>
			{/if}
		</div>
	</div>

	<div class="header-right">
		<!-- 语言切换器 -->
		<div class="language-switcher">
			<button 
				class={$zhBtnClass}
				onclick={() => setLanguage('zh')}
				title="切换到中文"
			>
				中
			</button>
			<button 
				class={$enBtnClass}
				onclick={() => setLanguage('en')}
				title="Switch to English"
			>
				EN
			</button>
		</div>

		<button class="header-btn settings-btn" onclick={onSettingsClick} title={t('nav.settings')}>
			<span class="btn-icon">⚙</span>
			<span class="btn-label">{t('nav.settings')}</span>
		</button>
	</div>
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		position: sticky;
		top: 0;
		z-index: 100;
		gap: 1rem;
	}

	.header-left {
		display: flex;
		align-items: baseline;
		flex-shrink: 0;
	}

	.logo {
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: var(--text-primary);
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.header-center {
		display: flex;
		align-items: center;
		flex: 1;
		justify-content: center;
		min-width: 0;
;
	}

	.refresh-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.status-text {
		font-size: 0.6rem;
		color: var(--text-muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.status-text.loading {
		color: var(--accent);
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	/* 语言切换器 */
	.language-switcher {
		display: flex;
		gap: 0.25rem;
	}

	.language-switcher button {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 2rem;
		padding: 0.35rem 0.5rem;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 3px;
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.15s ease;
		font-size: 0.65rem;
		font-weight: 500;
	}

	.language-switcher button:hover {
		background: var(--border);
		color: var(--text-primary);
	}

	.language-switcher button.active {
		background: var(--accent);
		color: white;
		border-color: var(--accent);
	}

	.header-btn {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		min-height: 2.75rem;
		padding: 0.4rem 0.75rem;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 4px;
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.15s ease;
		font-size: 0.65rem;
	}

	.header-btn:hover {
		background: var(--border);
		color: var(--text-primary);
	}

	.btn-icon {
		font-size: 0.8rem;
	}

	.btn-label {
		display: none;
	}

	@media (min-width: 768px) {
		.btn-label {
			display: inline;
		}
	}
</style>
