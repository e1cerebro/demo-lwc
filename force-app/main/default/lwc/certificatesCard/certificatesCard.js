import { LightningElement } from 'lwc';

export default class CertificatesCard extends LightningElement {
	value = '';

    get options() {
        return [
            { label: 'Certificate Folder', value: 'certificate_folder' },
            { label: 'Report Folders', value: 'report_folders' },
        ];
    }

	handleClick(e){
		e.preventDefault();
	}
}