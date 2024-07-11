export default function DesignTokens() {
  return (
    <div className="p-8">
      <h1 className="text-xxxl font-bold mb-4">Design Tokens</h1>
      <div className="mb-8">
        <h2 className="text-xxl font-bold mb-4">Cores</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Ação</h3>
          <div className="flex space-x-2 overflow-x-auto">
            <div className="w-16 h-16 bg-action-lightest"></div>
            <div className="w-16 h-16 bg-action-light"></div>
            <div className="w-16 h-16 bg-action-medium"></div>
            <div className="w-16 h-16 bg-action-dark"></div>
            <div className="w-16 h-16 bg-action-darkest"></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Neutra</h3>
          <div className="flex space-x-2 overflow-x-auto">
            <div className="w-16 h-16 bg-neutral-lightest border border-black"></div>
            <div className="w-16 h-16 bg-neutral-light border border-black"></div>
            <div className="w-16 h-16 bg-neutral-medium04 border border-black"></div>
            <div className="w-16 h-16 bg-neutral-medium03 border border-black"></div>
            <div className="w-16 h-16 bg-neutral-medium02 border border-black"></div>
            <div className="w-16 h-16 bg-neutral-medium01 border border-black"></div>
            <div className="w-16 h-16 bg-neutral-dark border border-black"></div>
            <div className="w-16 h-16 bg-neutral-darkest border border-black"></div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Alerta</h3>
          <div className="flex space-x-2 overflow-x-auto">
            <div className="w-16 h-16 bg-alert-info"></div>
            <div className="w-16 h-16 bg-alert-success"></div>
            <div className="w-16 h-16 bg-alert-attention"></div>
            <div className="w-16 h-16 bg-alert-error"></div>
            <div className="w-16 h-16 bg-alert-info-dark-theme"></div>
            <div className="w-16 h-16 bg-alert-success-dark-theme"></div>
            <div className="w-16 h-16 bg-alert-attention-dark-theme"></div>
            <div className="w-16 h-16 bg-alert-error-dark-theme"></div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xxl font-bold mb-4">Tipografia</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Família tipográfica</h3>
          <p className="font-sans">Fonte: Roboto</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Peso</h3>
          <p className="font-light">Light</p>
          <p className="font-regular">Regular</p>
          <p className="font-medium">Medium</p>
          <p className="font-bold">Bold</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Tamanho</h3>
          <p className="text-nano">Nano</p>
          <p className="text-micro">Micro</p>
          <p className="text-base">Base</p>
          <p className="text-xxs">XXS</p>
          <p className="text-xs">XS</p>
          <p className="text-sm">SM</p>
          <p className="text-md">MD</p>
          <p className="text-lg">LG</p>
          <p className="text-xl">XL</p>
          <p className="text-xxl">XXL</p>
          <p className="text-xxxl">XXXL</p>
          <p className="text-giant">Giant</p>
          <p className="text-huge">Huge</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Altura de Linha</h3>
          <p className="leading-tightest">Tightest</p>
          <p className="leading-tight">Tight</p>
          <p className="leading-medium">Medium</p>
          <p className="leading-loose">Loose</p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Espaçamentos</h2>
        <div className="flex space-x-2 overflow-x-auto">
          <div className="w-nano h-nano bg-gray-200"></div>
          <div className="w-micro h-micro bg-gray-200"></div>
          <div className="w-xxxs h-xxxs bg-gray-200"></div>
          <div className="w-xxs h-xxs bg-gray-200"></div>
          <div className="w-xs h-xs bg-gray-200"></div>
          <div className="w-sm h-sm bg-gray-200"></div>
          <div className="w-md h-md bg-gray-200"></div>
          <div className="w-lg h-lg bg-gray-200"></div>
          <div className="w-xl h-xl bg-gray-200"></div>
          <div className="w-xxl h-xxl bg-gray-200"></div>
          <div className="w-giant h-giant bg-gray-200"></div>
          <div className="w-huge h-huge bg-gray-200"></div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Margens internas</h2>
        <div className="flex space-x-2 overflow-x-auto">
          <div className="p-squish-nano bg-gray-200">Nano</div>
          <div className="p-squish-micro bg-gray-200">Micro</div>
          <div className="p-squish-sm bg-gray-200">SM</div>
          <div className="p-squish-md bg-gray-200">MD</div>
          <div className="p-squish-lg bg-gray-200">LG</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xxl font-bold mb-4">Linhas e bordas</h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Linhas</h3>
          <div className="border-b-stroke-100 mb-2">Stroke 100</div>
          <div className="border-b-stroke-200 mb-2">Stroke 200</div>
          <div className="border-b-stroke-300 mb-2">Stroke 300</div>
          <div className="border-b-stroke-400 mb-2">Stroke 400</div>
          <div className="border-b-stroke-500 mb-2">Stroke 500</div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Bordas</h3>
          <div className="flex space-x-2 overflow-x-auto gap-4">
            <div>
              <span>radius 100</span>
              <div className="w-20 h-20 border border-black rounded-radius-100 mb-2"></div>
            </div>
            <div>
              <span>radius 200</span>
              <div className="w-20 h-20 border border-black rounded-radius-200 mb-2"></div>
            </div>
            <div>
              <span>radius 300</span>
              <div className="w-20 h-20 border border-black rounded-radius-300 mb-2"></div>
            </div>
            <div>
              <span>radius 400</span>
              <div className="w-20 h-20 border border-black rounded-radius-400 mb-2"></div>
            </div>
            <div>
              <span>radius pill</span>
              <div className="w-20 h-20 border border-black rounded-radius-pill mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
