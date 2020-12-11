all: state factory abstractFactory

state:
	cat \
	DesignPatterns/index.js \
	DesignPatterns/State/index.js \
	DesignPatterns/State/Utilities/index.js \
	DesignPatterns/State/Utilities/BadMethodCallException.js \
	DesignPatterns/State/Printers/index.js \
	DesignPatterns/State/Printers/PrinterState/index.js \
	DesignPatterns/State/Printers/PrinterState/AbstractPrinterState.js \
	DesignPatterns/State/Printers/PrinterState/OfflinePrinterState.js \
	DesignPatterns/State/Printers/PrinterState/PlugedInPrinterState.js \
	DesignPatterns/State/Printers/PrinterState/TurnedOnPrinterState.js \
	DesignPatterns/State/Printers/PrinterState/WarmedUpPrinterState.js \
	DesignPatterns/State/Printers/Printer.js \
	DesignPatterns/State/Test.js \
	DesignPatterns/State/main.js > public/State/build.js

factory:
	cat \
	DesignPatterns/index.js \
	DesignPatterns/Factory/index.js \
	DesignPatterns/Factory/Publications/index.js \
	DesignPatterns/Factory/Publications/AbstractPublication.js \
	DesignPatterns/Factory/Publications/AbstractPublisher.js \
	DesignPatterns/Factory/Publications/Books/index.js \
	DesignPatterns/Factory/Publications/Books/Book.js \
	DesignPatterns/Factory/Publications/Books/BookPublisher.js \
	DesignPatterns/Factory/Publications/Journals/index.js \
	DesignPatterns/Factory/Publications/Journals/Journal.js \
	DesignPatterns/Factory/Publications/Journals/JournalPublisher.js \
	DesignPatterns/Factory/Test.js \
	DesignPatterns/Factory/main.js > public/Factory/build.js

abstractFactory:
	cat \
	DesignPatterns/index.js \
	DesignPatterns/AbstractFactory/index.js \
	DesignPatterns/AbstractFactory/Tables/index.js \
	DesignPatterns/AbstractFactory/Tables/AbstractTable.js \
	DesignPatterns/AbstractFactory/Tables/AbstractRow.js \
	DesignPatterns/AbstractFactory/Tables/AbstractCell.js \
	DesignPatterns/AbstractFactory/Tables/AbstractHeader.js \
	DesignPatterns/AbstractFactory/Tables/AbstractHeaderCell.js \
	\
	DesignPatterns/AbstractFactory/Tables/HTML/index.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLCell.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLRow.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLHeader.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLHeaderCell.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLTable.js \
	DesignPatterns/AbstractFactory/Tables/HTML/HTMLTableFactory.js \
	\
	DesignPatterns/AbstractFactory/Tables/Text/index.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextTable.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextCell.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextHeaderCell.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextRow.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextHeader.js \
	DesignPatterns/AbstractFactory/Tables/Text/TextTableFactory.js \
	\
	DesignPatterns/AbstractFactory/Tables/CSV/index.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVTable.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVCell.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVHeader.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVRow.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVHeaderCell.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVTableFactory.js \
	DesignPatterns/AbstractFactory/Tables/CSV/CSVTableFactory.js \
	\
	DesignPatterns/AbstractFactory/Tables/Utilities/index.js \
	DesignPatterns/AbstractFactory/Tables/Utilities/PublicationList.js \
	\
	DesignPatterns/AbstractFactory/Test.js \
	DesignPatterns/AbstractFactory/main.js > public/AbstractFactory/build.js