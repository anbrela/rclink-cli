
# rclink

`rclink` is a simple command-line tool that allows you to easily manage and switch between different npm configuration files (`.npmrc`) stored in your user's home directory. With `rclink`, you can quickly link a specific `.npmrc` file to the global configuration, enabling seamless transitions between different project setups or environments. The tool also provides a convenient way to unlink the `.npmrc` file, reverting to a clean state.

## Features

- **Link `.npmrc` files**: Easily link a specific `.npmrc` file to the global npm configuration.
- **Unlink `.npmrc` files**: Remove the linked `.npmrc` file to return to the default state.
- **Help command**: Provides guidance on using `rclink`.

## Installation

To install `rclink`, clone the repository and install it globally:

```bash
git clone https://github.com/yourusername/rclink.git
cd rclink
npm install -g .
```

## Usage

### Link a specific `.npmrc` file:

```bash
rclink <alias>
```

For example:

```bash
rclink netflix
```

This command will link the `.npmrc.netflix` file located in `~/.rc_files` to the global `.npmrc` file.

### Unlink the current `.npmrc` file:

```bash
rclink unlink
```

This command removes the `.npmrc` file from your home directory.

### Display help:

```bash
rclink --help
```

This command shows the usage information and available commands.

## Setting Up `.npmrc` Files

To use `rclink`, first, create a `.rc_files` directory in your home directory and place your custom `.npmrc` files there:

```bash
mkdir -p ~/.rc_files
```

For example, save your custom `.npmrc` files in this directory and name them according to the environment or project you are working on. The alias you use in the `rclink` command should match the file names after `.npmrc.`.

Examples:

```bash
~/.rc_files/.npmrc.netflix      # For netflix environment
~/.rc_files/.npmrc.personal     # For personal use
```

You can then switch between these files using the alias:

```bash
rclink netflix   # Switch to the netflix npm configuration
rclink personal  # Switch to your personal npm configuration
```

## Links

- [NPM Package](https://www.npmjs.com/package/rclink-cli)
- [GitHub Repository](https://github.com/anbrela/rclink)

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
