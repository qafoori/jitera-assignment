import { render, fireEvent, screen, getByTestId } from '@testing-library/react'
import { AppLayout } from '.'

test('menu should be collapsed', async () => {
  render(<AppLayout title="" />)

  // Click button
  fireEvent.click(screen.getByTestId('collapseButton'))

  // Wait for page to update with query text
  const sidebar = screen.getByTestId('sidebar')
  expect(sidebar.classList).toContain('close')
})
