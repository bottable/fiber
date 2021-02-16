import styled from 'styled-components'

type StyledLayoutProps = {
  hasSider?: boolean
}

export const StyledLayout = styled.section<StyledLayoutProps>`
  display: flex;
  flex: auto;
  flex-direction: ${({ hasSider }) => (hasSider ? 'row' : 'column')};
  min-height: 0;
  background: #f0f2f5;
  font-size: ${({ theme }) => theme.fontSizes.md};
`

export const StyledHeader = styled.header`
  flex: 0 0 auto;
  height: 64px;
  padding: 0 50px;
  background: #001529;
  color: rgba(0, 0, 0, 0.85);
  line-height: 64px;
`

export const StyledContent = styled.main`
  flex: auto;
  min-height: 0;
  overflow-x: hidden;
`

export const StyledFooter = styled.footer`
  flex: 0 0 auto;
  padding: 24px 50px;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.85);
`

export const StyledSider = styled.aside`
  position: relative;
  flex: 0 0 200px;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  background: #001529;
  transition: all 0.2s;
`

export const SiderChildren = styled.div`
  height: 100%;
  margin-top: -0.1px;
  padding-top: 0.1px;
`
