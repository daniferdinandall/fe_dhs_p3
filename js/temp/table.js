export let isiTabel =
    `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">
        <div class="w-auto">
            <p class="text-s font-semibold text-coolGray-800">#NAMA#</p>
            <p class="text-xs font-medium text-coolGray-500">#NPM#</p>
        </div>
    </td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
            <p class="text-s font-semibold text-coolGray-800">#PROGRAM_STUDI#</p>
            <p class="text-xs font-medium text-coolGray-500">#FAKULTAS#</p>
        </div>
    </td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
        <p>
            <a type="button" href="detailDhs.html?dhsId=#IDLIHAT#" class="text-s font-semibold text-coolGray-800">Lihat</a> | 
            <a type="button" href="editDhs.html?dhsId=#IDEDIT#" class="text-s font-semibold text-coolGray-800">Edit</a> | 
            <button type="button" id="del_button" onclick="deleteData('#IDELETE#','#URL#')"> Delete
        </p>
        </div>
    </td>
</tr>
`
export let isiTabelDosen =
    `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4">#KODE#</td>
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
    <td class="whitespace-nowrap px-6 py-4">#PHONE#</td>
</tr>
`
export let isiTabelMatkul =
    `
    <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">#KODE#</td>
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
    <td class="whitespace-nowrap px-6 py-4">#DOSEN#</td>
    <td class="whitespace-nowrap px-6 py-4">#SKS#</td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
            <p>
                <a type="button" href="editmatkul.html?matkulId=#IDEDIT#" class="text-s font-semibold text-coolGray-800">Edit</a> | 
                <button type="button" id="del_button" onclick="deleteData('#IDELETE#','#URL#')"> Delete
            </p>
        </div>
    </td>
  </tr>
  `

export let isiTabelMahasiswa = `
<tr class="border-b dark:border-neutral-500">
<td class="whitespace-nowrap px-6 py-4">
    <div class="w-auto">
        <p class="text-s font-semibold text-coolGray-800">#NAMA#</p>
        <p class="text-xs font-medium text-coolGray-500">#NPM#</p>
    </div>
</td>
<td class="whitespace-nowrap px-6 py-4 font-medium">
    <div class="w-auto">
        <p class="text-s font-semibold text-coolGray-800">#PROGRAM_STUDI#</p>
        <p class="text-xs font-medium text-coolGray-500">#FAKULTAS#</p>
    </div>
    </td>
<td class="whitespace-nowrap px-6 py-4">#DOSEN_WALI#</td>
<td class="whitespace-nowrap px-6 py-4">
    <div class="w-auto">
        <p>
            <a type="button" href="editMahasiswa.html?mahasiswaId=#IDEDIT#" class="text-s font-semibold text-coolGray-800">Edit</a> | 
            <button type="button" id="del_button" onclick="deleteData('#IDELETE#','#URL#')"> Delete
        </p>
    </div>
</td>
</tr>
`

export let isiTabelNilai =
    `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
    <td class="whitespace-nowrap px-6 py-4">#SKS#</td>
    <td class="whitespace-nowrap px-6 py-4">#DOSEN#</td>
    <td class="whitespace-nowrap px-6 py-4">#NILAI#</td>
</tr>
`
export let isiTabelProdi = `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4">#KODE#</td>
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
</tr>
`
export let isiTabelFakultas = `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4">#KODE#</td>
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
</tr>
`