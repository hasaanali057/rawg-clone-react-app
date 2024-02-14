import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'

interface Props{
  sortOrder: string
  onSelectSortOrder: (sortOrder: string) =>  void
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

  const sortOrders = [
    { label: 'Relevance', value: '' },
    { label: 'Date added', value: '-added' },
    { label: 'Name', value: 'name' },
    { label: 'Release Date', value: '-released' },
    { label: 'Popularity', value: '-metacritic' },
    { label: 'Average rating', value: '-rating'}
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />} >Order By: { currentSortOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {
          sortOrders.map(
            sortOrder => 
              <MenuItem onClick={() => onSelectSortOrder(sortOrder.value) } key={sortOrder.value} value={sortOrder.value}>
                {sortOrder.label}
              </MenuItem>
          )
        }
      </MenuList>
    </Menu>
  )
}

export default SortSelector