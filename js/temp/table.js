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
            <p class="text-s font-semibold text-coolGray-800">#MATKUL#</p>
            <p class="text-s font-medium text-coolGray-800">Grade: #NILAI#</p>
            </div>
        </td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
            <p class="text-s font-semibold text-coolGray-800">#MATKUL1#</p>
            <p class="text-s font-medium text-coolGray-800">Grade: #NILAI1#</p>
        </div>
    </td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
            <p class="text-s font-semibold text-coolGray-800">#MATKUL2#</p>
            <p class="text-s font-medium text-coolGray-800">Grade: #NILAI2#</p>
        </div>
    </td>
    <td class="whitespace-nowrap px-6 py-4">
        <div class="w-auto">
            <p class="text-s font-semibold text-coolGray-800">#MATKUL3#</p>
            <p class="text-s font-medium text-coolGray-800">Grade: #NILAI3#</p>
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
  </tr>
  `

export let isiTabelMahasiswa = `
<tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">#NPM#</td>
    <td class="whitespace-nowrap px-6 py-4">#NAMA#</td>
    <td class="whitespace-nowrap px-6 py-4">#FAKULTAS#</td>
    <td class="whitespace-nowrap px-6 py-4">#PROGRAM_STUDI#</td>
    <td class="whitespace-nowrap px-6 py-4">#DOSEN_WALI#</td>
</tr>
`