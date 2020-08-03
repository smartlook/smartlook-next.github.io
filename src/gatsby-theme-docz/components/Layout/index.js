/** @jsx jsx */
import { jsx, Layout as BaseLayout, Main } from 'theme-ui'
import { useRef, useState } from 'react'

import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer'
import * as styles from './styles'

export const Layout = ({ children }) => {
	const [open, setOpen] = useState(false)
	const nav = useRef()

	return (
		<BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
			<Main sx={styles.main}>
				<Header onOpen={() => setOpen((s) => !s)} />
				<div sx={styles.wrapper}>
					<Sidebar
						ref={nav}
						open={open}
						onFocus={() => setOpen(true)}
						onBlur={() => setOpen(false)}
						onClick={() => setOpen(false)}
					/>
					<MainContainer data-testid="main-container">{children}</MainContainer>
				</div>
			</Main>
		</BaseLayout>
	)
}
