import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const ButtonsDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Open Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        sideOffset={4}
        style={{
          background: 'white',
          border: '1px solid #ccc',
          padding: 8,
          borderRadius: 4,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}
      >
        <DropdownMenu.Item onSelect={() => toggleInspect()}>
            {isInspectMode ? "Disable" : "Enable"} Inspect Mode
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => downloadJson(getJson())}>
            Download JSON
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default ButtonsDropdown;